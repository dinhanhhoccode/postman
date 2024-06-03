pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body includes user id", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(parseInt(pm.variables.get("userId")));
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
