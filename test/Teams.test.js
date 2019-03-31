const functions = require('./teamsfunctions')
var childdata = {
    team: "",
    name: "Seif",
    age: 22,
    familyStatus: "divorced",
    educationalLevel: "High school"
}
var teamdata = {
    name: "team1",
    children: ["Seif"]
}
var response
test('admin create children info', async () => {
    response = await functions.createChild(childdata)
    expect(response).toMatchObject(childdata)
})
test('admin read the children info', async () => {
    const child = await functions.getChild(response._id)
    expect(child).toMatchObject(childdata)
})
childdata.name = 'Seifo'
test('admin update children info', async () => {
    const child = await functions.updateChild(childdata, response._id)
    expect(child.name).toBe(childdata.name)
})
test('admin delete children info', async () => {
    const child = await functions.deleteChildren(response._id)
    expect(child).toMatchObject(childdata)
})
test('admin create 6 groups with children names', async () => {
    const team = await functions.createTeam(teamdata)
    expect(team).toMatchObject(teamdata)
})