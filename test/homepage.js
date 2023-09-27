describe("home page", function () {
    it("should have the correct title", function (browser) {
        browser
            .navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            .assert.titleEquals("OrangeHRM");
    });
});
