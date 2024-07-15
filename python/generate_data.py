import csv
import random
import json
from datetime import datetime

NUM_ROWS = 1000

OUTPUT_FILE = "dummy_data.csv"

with open("sales_data.json") as json_file:
    sales_data = json.load(json_file)



# Function to generate random data based on existing structure
def generate_random_data():
    order_number = f"ORD{random.randint(1000, 9999)}"
    customer = random.choice(["Alice", "Bob", "Charlie", "David", "Emma", "Frank"])
    item_count = random.randint(1, 3)  # Number of items in the order

    items = []

    # Randomly select unique items from the existing sales data
    chosen_items = random.sample(sales_data, item_count)
    for sale in chosen_items:
        item = {
            "id": sale['items'][0]['id'],
            "title": sale['items'][0]['title'],
            "category": sale['items'][0]['category'],
            "description": sale['items'][0]['description'],
            "price": sale['items'][0]['price'],
            "quantity": random.randint(1, 5),  # Random quantity between 1 and 5
            "popularity": sale['items'][0]['popularity'],
            "image": sale['items'][0]['image']
        }
        items.append(item)

    total = sum(item['price'] * item['quantity'] for item in items)

    return {
        "orderNumber": order_number,
        "customer": customer,
        "items": items,
        "total": total,
        "timestamp": datetime.now().isoformat()
    }


random_orders = [generate_random_data() for _ in range(NUM_ROWS)]

# Define the CSV file path
csv_file = 'dummy_data.csv'

# Define field names for CSV header
fieldnames = ['Order Number', 'Customer', 'Item ID', 'Title', 'Category', 'Description', 'Price', 'Quantity', 'Popularity', 'Image', 'Total', 'Timestamp']

# Write data to CSV file
with open(csv_file, mode='w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    
    # Write header
    writer.writeheader()
    
    # Write each order as a row in the CSV file
    for order in random_orders:
        for item in order['items']:
            writer.writerow({
                'Order Number': order['orderNumber'],
                'Customer': order['customer'],
                'Item ID': item['id'],
                'Title': item['title'],
                'Category': item['category'],
                'Description': item['description'],
                'Price': item['price'],
                'Quantity': item['quantity'],
                'Popularity': item['popularity'],
                'Image': item['image'],
                'Total': order['total'],
                'Timestamp': order['timestamp']
            })




