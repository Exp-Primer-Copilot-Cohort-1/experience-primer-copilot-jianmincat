import json

# Create a python function to read and merge two json files and write contents into a new json file
def merge_json_files(file1, file2, output_file):
    # Read the contents of the first json file
    with open(file1, 'r') as f1:
        data1 = json.load(f1)

    # Read the contents of the second json file
    with open(file2, 'r') as f2:
        data2 = json.load(f2)

    # Merge the two json files
    merged_data = {**data1, **data2}

    # Write the merged data into a new json file
    with open(output_file, 'w') as f:
        json.dump(merged_data, f)
