it("voltmxiostestapp/testNew", async function() {
	var _data = testcaseData_1669226173948.dataset;
	await voltmx.automation.playback.waitFor(["voltmxiostestapp/Form1","Button0e61f71ea77e54c"]);
	// :User Injected Code Snippet [// - [1 lines]]
	await voltmx.automation.playback.wait(5000);
	// :End User Injected Code Snippet {b5f612dc-89c4-be11-9a18-4dc7071e4187}
	voltmx.automation.button.click(["voltmxiostestapp/Form1","Button0e61f71ea77e54c"]);
	voltmx.automation.alert.click(0);
	// :User Injected Code Snippet [// - [1 lines]]
	await voltmx.automation.playback.wait(5000);
	// :End User Injected Code Snippet {afd694c5-7195-9646-86e8-8b2076a6ec64}
	voltmx.automation.button.click(["voltmxiostestapp/Form1","Button0ba9623b33b8242"]);
});