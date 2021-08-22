const que_request = `
SET @username       = ?,
    @commandName    = ?,
    @description    = ?;
INSERT INTO requests(username, commandName, description) 
VALUES ( @username,
    @commandName,
    @description)
`

module.exports = {
    que_request,
 }