## Background

The goal of this project was to build a flexible and modern online timer for puzzles. While many timers like this exist, none of them have a fluid user interface along with cloud synchronization of timers. The application is also an offline-first app - and does not rely on internet to save and store times.

## Development & Skills

A significant portion of the development was spent ensuring that the application synchronizes to a cloud database such that the times are saved through multiple sessions. This was done with the help of Apache CouchDB which provided a great way to sync data, as well as use the built in IndexedDB to store times locally to ensure that the offline-first feature of the application is maintained while the sync occurs. This has been abstracted into [its own dependency called timer-db](https://github.com/cubing/timer-db). 

Developing the user interface was done through React and the Material-UI framework. The key part was to give live feedback, and make all components adjustable so that users to tailor the application to their own needs.

## Product

Pulze was built to be an online timer that is simplistic to use as well as being feature rich. It provides a 3D representation of the puzzled state as well as cloud synchronization of the times through a live database. The user interface was intentionally designed to be very flexible, with all elements being able to change in size and position.
