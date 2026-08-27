import speech_recongnition as sr
import pyttsx3
import webbrowser
import os
import datetime
import wikipedia

engine = pyttsx3.init('sapi5')
engine.setProperty('voice', engine.getProperty('voices')[1].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("sun rha hun...")
        r.pause_threshold = 1
        audio = r.listen(source)
    try:
        print("Samajh rha hun...")
        query = r.recognize_google(audio, language='en-in')
        print(f"Ap ne kaha: {query}\n")
    except:
        return "None"
    return query

def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour<12: speak("Good MorniniJani")
    elif hour<18: speak("Good Afternoon Jani")
    else: speak("Good Evening Jani")
    speak("I am Afridi AI. Kaisa madad kar sakta hun?")

if __name__ == "__main__":
    wishMe()
    while True:
        query = takeCommand().lower()
        if 'wikipedia' in query:
            speak('Serching Wikipedia...')
            query = query.replace("wikipedia", "")
            results = wikipedia.summary(query, sentences=2)
            speak(results)
        elif 'youtube' in query:
            webbrowser.open("youtube.com")
            speak("Youtube khol diya jani")
        elif 'time' in query:
            strTime = datetime.datetime.now().strftime("%H:%M:%S")
            speak(f"Jani abhi {strTime} baj rahe hain")
        elif 'exit' in query:
            speak("Allah Hafiz Jani")
            break