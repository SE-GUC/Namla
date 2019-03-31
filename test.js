const funcws = require('/WorkshopOwnersfn');
const funcss = require('/SkillRequestsfn');
const cart = require('/models/Workshop')

test('reading a WorkshopOwner', async () => {
    await funcws.getWorkshopOwners()
    });
test('creating a WorkshopOwner', async () => {
    await funcws.postWorkshopOwner()
    });

    
test('reading a skillRequest', async () => {
    await funcss.getSkillRequest()
    });
test('creating a skillRequest', async () => {
    await funcss.postSkillRequest()
    });
test('deleting a skillRequest', async () => {
    const skillRequest=await funcss.postSkillRequest();
    const actual = skillRequest.data.data;
    const id=actual['_id'];
    const deleted =await funcss.deleteSkillRequest(id);
    deletedData=deleted.data.data;
    expect.assertions(1)
    expect(deletedData).toMatchObject(skillRequest);
    });