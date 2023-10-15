describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function() {
    // initialization logic
    let newTr = document.createElement('tr');
    serverNameInput.value = 'Alice';
    let tipAverage = 10.00;
  });
});


  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });



it('should update the serverTbody with the correct data', function () {
  updateServerTable(); 

  expect(newTr.children[0].textContent).toEqual('Alice');
  expect(serverTbody.children.length).toEqual(2);
  expect(newTr.id).toEqual(true);
  expect(newTr.children[1].textContent).toEqual('$10.00');

});

afterEach(function() {
  serverTbody = 0;
  serverNameInput.textContent = '';
  let newTr = 0

});

