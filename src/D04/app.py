from flask import Flask
from flask_cors import CORS
from controllers import stats_controller, models_controller

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

app.register_blueprint(stats_controller.api)
app.register_blueprint(models_controller.api)

if __name__ == '__main__':
    app.run(debug=True)