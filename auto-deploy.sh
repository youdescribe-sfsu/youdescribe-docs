#!/bin/bash

while true; do
  # Download Docker Compose files from S3
  aws s3 cp s3://youdescribexci/docker-compose.yml docker-compose_new.yml

  # Calculate checksum of the existing Docker Compose file
  current_checksum=$(md5sum docker-compose.yml | awk '{print $1}')

    # Calculate checksum of the new Docker Compose file
  new_checksum=$(md5sum docker-compose_new.yml | awk '{print $1}')

  # Check if the checksum has changed (indicating changes in S3)
  if [ "$new_checksum" != "$current_checksum" ]; then
    echo "Changes detected. Redeploying services..."

    # Replace the existing file with the new one
    mv docker-compose_new.yml docker-compose.yml

    docker-compose down
    docker-compose up -d
    docker system prune -af --volumes
  else
    echo "No changes detected."
    rm docker-compose_new.yml
  fi

  # Sleep for 1 minute before checking again
  sleep 60
done
