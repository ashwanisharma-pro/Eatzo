import os
import requests

def download_real_images(base_dir):
    session = requests.Session()
    session.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.jpg') or file.endswith('.png'):
                file_path = os.path.join(root, file)
                
                # Determine category based on filename
                category = "food"
                if "pizza" in file.lower():
                    category = "pizza"
                elif "burger" in file.lower():
                    category = "burger"
                elif "biryani" in file.lower():
                    category = "biryani"
                elif "momos" in file.lower():
                    category = "dimsum"
                elif "shake" in file.lower() or "beverage" in file.lower() or "coffee" in file.lower() or "soda" in file.lower():
                    category = "drink"
                elif "restaurant" in root.lower() or "banner" in file.lower():
                    category = "restaurant,interior"
                
                # Use loremflickr to get a random image for the specific category
                url = f"https://loremflickr.com/600/400/{category}/all"
                
                try:
                    print(f"Downloading real image for {file} using category: {category}...")
                    resp = session.get(url, timeout=15)
                    if resp.status_code == 200 and len(resp.content) > 5000:
                        with open(file_path, 'wb') as out_file:
                            out_file.write(resp.content)
                        print(f"Successfully downloaded for {file}")
                    else:
                        print(f"Failed to get a good image for {file}")
                except Exception as e:
                    print(f"Error on {file}: {e}")

if __name__ == "__main__":
    download_real_images(r"c:\Users\deepe\OneDrive\Desktop\Eatzo\Eatzo\my-app\public\images\logo")
