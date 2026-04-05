import os
import re
import requests

def fix_images(base_dir):
    session = requests.Session()
    session.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    
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
                                resp = session.get(url, timeout=10, verify=False)
                                if resp.status_code == 200 and len(resp.content) > 1000:
                                    with open(file_path, 'wb') as out_file:
                                        out_file.write(resp.content)
                                    success = True
                            except Exception as e:
                                pass
                                
                        if not success:
                            # Fallback 
                            fallback_text = file.split('.')[0].replace('-', ' ').title()
                            color = "28a745" if "food" in root.lower() else "007bff"
                            fallback_url = f"https://dummyimage.com/400x400/{color}/ffffff&text={fallback_text}"
                            resp = session.get(fallback_url, timeout=10, verify=False)
                            if resp.status_code == 200:
                                with open(file_path, 'wb') as out_file:
                                    out_file.write(resp.content)
                                print(f"Fixed {file} with fallback")
                                
                    except Exception as e:
                        print(f"Error on {file}: {e}")

if __name__ == "__main__":
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    fix_images(r"c:\Users\deepe\OneDrive\Desktop\Eatzo\frontend\images\logo")
