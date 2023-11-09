# eth-balance-service

Before starting, you need to create a ".env" file in the root directory. 
In this file, create the variable "API_KEY". 
This is the value of your API key to access the Infura provider.

By default, the application will launch on port 3000. If you want to use a different port to launch, create a PORT variable with a number value in the ".env" file

After starting the server, two routes are available:
1. "/" - will display the message "Server is working..."
2. "/balance/address" - will display a message with the address you specified when requesting and the current balance Wei

To run use the script

npm start