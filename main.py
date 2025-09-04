from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)  # ou com ssl_context se quiser HTTPS