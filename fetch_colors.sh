#!/bin/bash

# Script to fetch color palettes from colormind.io API
# Usage: ./fetch_colors.sh <number_of_requests> [output_file]

NUM_REQUESTS=${1:-5}
OUTPUT_FILE=${2:-"color_responses.json"}

URL="http://colormind.io/api/"
DATA='{"model":"default"}'

# Clear the output file if it exists
> "$OUTPUT_FILE"

echo "Fetching $NUM_REQUESTS color palettes from $URL..."

for ((i=1; i<=NUM_REQUESTS; i++)); do
    echo "Request $i of $NUM_REQUESTS..."
    
    # Make the curl request and append to the output file
    curl -s -X POST "$URL" \
        -H "Content-Type: application/json" \
        -d "$DATA" >> "$OUTPUT_FILE"
    
    # Add a newline between responses for readability
    echo "" >> "$OUTPUT_FILE"
done

echo "Completed! Responses saved to $OUTPUT_FILE"
