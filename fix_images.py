import os
import re
import urllib.request
import urllib.parse
import ssl

def fix_images(base_dir):
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    
    # Ignore SSL errors
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.jpg') or file.endswith('.png'):
                file_path = os.path.join(root, file)
                if os.path.getsize(file_path) < 1000:
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                        
                        match = re.search(r'src="([^"]+)"', content)
                        url = match.group(1) if match else None
                        
                        success = False
                        if url:
                            try:
                                req = urllib.request.Request(url, headers={'User-Agent': user_agent})
                                with urllib.request.urlopen(req, timeout=10, context=ctx) as response, open(file_path, 'wb') as out_file:
                                    data = response.read()
                                    if len(data) > 1000:
                                        out_file.write(data)
                                        success = True
                            except Exception:
                                pass
                                
                        if not success:
                            # Fallback to green/blue placeholder via HTTP
                            fallback_text = file.split('.')[0].replace('-', ' ').title()
                            fallback_text = urllib.parse.quote(fallback_text)
                            color = "28a745" if "food" in root.lower() else "007bff"
                            # USING HTTP INSTEAD OF HTTPS TO AVOID SSL ISSUES
                            fallback_url = f"http://fakeimg.pl/400x400/{color}/ffffff?text={fallback_text}"
                            print(f"Fallback HTTP: {fallback_url}")
                            req = urllib.request.Request(fallback_url, headers={'User-Agent': user_agent})
                            with urllib.request.urlopen(req, timeout=10, context=ctx) as response, open(file_path, 'wb') as out_file:
                                out_file.write(response.read())
                                
                    except Exception as e:
                        print(f"Critical error on {file}: {e}")

if __name__ == "__main__":
    fix_images(r"c:\Users\deepe\OneDrive\Desktop\Eatzo\frontend\images\logo")
