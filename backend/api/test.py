import pytest

from . import server

# fixtures happen in test.sh
# when we seed elasticsearch
# with fake data

@pytest.fixture()
def app():
    app = server.app
    app.config.update({
        "TESTING": True,
    })

    # other setup can go here

    yield app

    # clean up / reset resources here


@pytest.fixture()
def client(app):
    return app.test_client()



def test_search_api(client):
    response = client.get("/searchdata/lizard")
    assert response.status_code == 200
    assert b'myData' in response.data
