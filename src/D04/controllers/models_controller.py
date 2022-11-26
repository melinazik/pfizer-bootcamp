from flask import Blueprint, request
from services import models_service
api = Blueprint(
    name="models_controller",
    import_name="models_controller",
    url_prefix="/api/v1/models"
)

@api.route("/", methods=['POST'])
def models():
    data = request.get_json()
    print(data)
    return (str(models_service.main(data))), 200
