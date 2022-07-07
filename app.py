from flask import Flask, render_template, request, redirect, url_for
from calendar import calendar
from pprint import pprint
from Google import Create_Service

app=Flask(__name__)
CLIENT_SECRET_FILE='client_secret_127949307080-ce5f47laccfujupdpm4ige9982og3tga.apps.googleusercontent.com.json'
API_NAME='calendar'
API_VERSION='v3'
SCOPES=['https://www.googleapis.com/auth/calendar']

service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)

@app.route('/create_evento', methods=['POST'])
def create_evento():
    event = service.events().insert(calendarId='primary',conferenceDataVersion=1, body=request.json).execute()
    return("ok")

@app.route('/')
def index():
    return render_template('index.html')

if __name__=="__main__":   
    app.run(port=5000, debug=True)