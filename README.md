## requirements

* NodeJS >=21.2.0

* pnpm 9.5.0



## how to use:

1. create a file named `.env` 

2. fill out `.env` with your bot info found at https://discord.com/developers/applications/ in the following format: 
   
   ```
   DISCORD_TOKEN=your-bots-token
   APPLICATION_ID=your-bots-application-id
   ```

3. install dependencies: `pnpm install --production`

4. register commands and start the bot: `pnpm start`