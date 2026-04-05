import os
import requests

def download_hq_images(base_dir):
    session = requests.Session()
    session.headers.update({'User-Agent': 'Mozilla/5.0'})
    
    # Specific mappings for highly relevant and beautiful food images
    image_map = {
        "banner1.jpg": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80", # large food spread
        "banner2.jpg": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80", # large restaurant food
        "banner3.jpg": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80", # pizza wide
        "eatzo-logo.png": "https://dummyimage.com/200x80/28a745/ffffff.png&text=Eatzo",
        
        # Specific foods
        "margherita-pizza.jpg": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
        "farmhouse-pizza.jpg": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
        "paneer-tikka-pizza.jpg": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        "cheese-burst-pizza.jpg": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80",
        
        "chicken-burger.jpg": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
        "veg-burger.jpg": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
        "cheese-burger.jpg": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80",
        
        "chicken-biryani.jpg": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
        "hyderabadi-biryani.jpg": "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?w=600&q=80",
        "paneer-biryani.jpg": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80",
        
        "french-fries.jpg": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
        "gulab-jamun.jpg": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
        "chocolate-cake.jpg": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    }
    
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.jpg') or file.endswith('.png'):
                file_path = os.path.join(root, file)
                
                url = image_map.get(file)
                if not url:
                    # Generic fallback based on name
                    if "pizza" in file.lower() or "dominos" in file.lower() or "hut" in file.lower():
                        url = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
                    elif "burger" in file.lower() or "kfc" in file.lower():
                        url = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
                    elif "biryani" in file.lower() or "behrouz" in file.lower():
                        url = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80"
                    elif "momo" in file.lower() or "chinese" in file.lower():
                        url = "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80"
                    elif "drink" in file.lower() or "shake" in file.lower() or "soda" in file.lower():
                        url = "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80"
                    else:
                        url = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                
                try:
                    print(f"Fetching HQ image for {file}...")
                    resp = session.get(url, timeout=15)
                    if resp.status_code == 200:
                        with open(file_path, 'wb') as out_file:
                            out_file.write(resp.content)
                except Exception as e:
                    print(f"Error on {file}: {e}")

if __name__ == "__main__":
    download_hq_images(r"c:\Users\deepe\OneDrive\Desktop\Eatzo\frontend\images\logo")
