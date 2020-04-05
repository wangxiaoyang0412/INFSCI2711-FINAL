# INFSCI2711-FINAL
This is a final project for INFSCI2711

# Description
A accident report website for users to visulize all accidents in US since 2016.  
Users can self-report accidents with or without usernames.  
Admin will handle all reports.

# Contributors
|Developer Name| Pitt ID| Description|
|:---|---|---|
|ZIJIAN XU|zix10|Postgres|
|YUE SUN|yus84|Postgres|
|HANCHEN WANG|haw11|Postgres|
|YANBING YANG|yay76|MongoDB|
|YUCHEN DENG|yud43|MongoDB|
|TAO TAO|tat76|MongoDB|
|QIXIAN WU|qiw63|Neo4j|
|SONG FANG|sof10|Neo4j|
|XIAOYANG WANG|xiw137|Neo4j|
|CHUQIAN MA|chm179|Neo4j|

# Function
### Main Page
1. Show numbers of accidents per state in the map.
2. Show numbers of accidents per county per state in the map
3. Searching numbers of accidents by road, city and state and show in google map.
4. Analysis and visualize number of accidents by humidity.
5. Analysis and visualize number of accidents by visibility.
6. Analysis and visualize number of accidents by weather-condition.
### User page
1. Resiger a new account with username, password, email, city, state, phone number.
2. Reset passwords if forget by username, email, phone number, city ,state.
3. Login and logout.
4. View my account page including username, city, state, email, phone number.
5. Update account page.
6. Reset password after logging in by enter the old password.
7. Update report settings weather by username or anonymous.
8. Self report by username, road, county, city, state, time and severity.
9. View all history report.
10. Withdraw pending report.
### Admin page
1. Login and Logout.
2. Handle all user reports, approve and deny by comments.
3. View all reports.
4. Update all reports.
5. Delete reports for untrue.
6. Delete users.

# RESTFUL APIs
||Operation|API|Description|
|:---|---|---|---|
|[]|GET|api/accidents/numbersByState|Select numbers of accidents per state|
|[]|GET|api/accidents/numbersByCounty/:state|Select numbers of accidents per county by state|
|[]|GET|api/accidents/numbersByRoad/:state/:city/:road|Searching by road, city and state|
|[]|GET|api/accidents/numbersByHumidity|Select numbers of accidents by humidity|
|[]|GET|api/accidents/numbersByVisibility|Select numbers of accidents by visibility|
|[]|GET|api/accidents/numbersByWeatherCondition|Select numbers of accidents by weather condition|
|[]|POST|api/user/register|User registration|
|[]|GET|api/user/:username/:city/:state/:email/:phonenumber|Check info is matched or not|
|[]|POST|api/user/:username/resetPassword|Reset password for user|
|[]|GET|api/user/:username/:password|Check info is matched or not|
|[]|GET|api/user/:username|Get all user info|
|[]|UPDATE|api/user/:username/updateAccount|update new info for user|
|[]|UPDATE|api/user/:username/settings|Update report settings|
|[]|POST|api/user/:username/self-report|Self-report accidents|
|[]|GET|api/user/:username/reports|View all history reports|
|[]|DELETE|api/user/:username/:reportID|Delete pending report|
|[]|GET|api/admin/:username/:password|Check info is matched for admin|
|[]|POST|api/admin/:username/reports|Handle report by comments|
|[]|UPDATE|api/admin/:username/updateReport/:reportID|Update report details|
|[]|DELETE|api/admin/:reportID|Delete user|
|[]|DELETE|api/admin/deleteUser/:username|Delete user|

# Git
1. All developers should create a new branch, naming rules for both local and remote is develop-\<FirstName\>
2. All pushes should be pushed to your own remote branch. Don't push to master.
3. Merge is allowed only by permision.
4. Do not add ideals in git.
5. Make sure all codes are working before push.

# Git Operation
1. clone from github  
> cd \<target-location\>   
> git clone \<github-url\>
2. check current branch  
> git branch
3. create your own branch  
> git branch develop-\<FirstName\>
4. change your new branch  
> git checkout develop-\<FirstName\>
5. add all changes withour ideals    
> git add \<project name\>
6. commit to local git  
> git commit -m "your commit comments"
7. return to last revison before push   
> git reset --soft HEAD~1
8. first time push to github  
> git push -u origin develop-\<FirstName\>
9. after first time push  
> git push
10. check current remote url  
> git remote -v
11. check all branches   
> git branch -a
12. stash changes  
> git stash


# Spring MVC
1. Datasource should be added in propertity and localhost should be replaced as ENV.PATH
2. All Models, Service, Controller, DOM should be naming as PostgresModels, MonogoModels, Neo4jModels...
3. server port should be 8080

# Angular
1. Installing angular   
> npm i -g angular
2. Run angular 
> ng serve

# Tips
1. Install sourcetree so that all git logs can be visualized.
2. It is better that all usernames and passwords for DB are same eg. username: adbproject, password: password
3. It is better to use IntelliJ, WebStorm IDEs
4. Test all APIs in postman
