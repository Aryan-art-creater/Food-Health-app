FROM nginx:alpine

# Copy all the website frontend files into the Nginx static hosting directory
COPY . /usr/share/nginx/html/

# Since your homepage is named 'Task.html', we copy it to 'index.html' 
# so that Nginx automatically serves it as the root domain page.
RUN cp /usr/share/nginx/html/Task.html /usr/share/nginx/html/index.html || true

# Cloud Run dynamically assigns a port via the PORT environment variable (default 8080).
# We modify the Nginx configuration to listen on this specific Cloud Run port before starting.
CMD sed -i -e 's/listen  *80;/listen '"$PORT"';/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
