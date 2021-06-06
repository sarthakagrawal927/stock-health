import csv
import json


# Open a csv reader called DictReader
with open(r'EQUITY_L.csv', encoding='utf-8') as csvf:
    csvReader = csv.DictReader(csvf)

    # Convert each row into a dictionary
    # and add it to data
    stock_list = [
        {
            'value': rows['SYMBOL'],
            'label': rows['NAME OF COMPANY'] + " - " + rows['SYMBOL'],
            'instanceID': rows['NAME OF COMPANY'] + " - " + rows['SYMBOL'],
        } for rows in csvReader
    ]

print(stock_list)

out_file = open("test2.json", "w")
json.dump(stock_list, out_file, indent=4, sort_keys=True)
out_file.close()
