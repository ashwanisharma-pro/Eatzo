import os
import re

def bust_cache(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html') or file.endswith('.css') or file.endswith('.js'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Add ?v=2 to .css paths
                    content = re.sub(r'(\.css)(?![?])', r'\1?v=2', content)
                    # Add ?v=2 to .jpg and .png paths
                    content = re.sub(r'(\.jpg|\.png)(?![?])', r'\1?v=2', content)
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                        
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    bust_cache(r"c:\Users\deepe\OneDrive\Desktop\Eatzo\frontend")
