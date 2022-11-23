it("voltmxiostestapp/FormNavigation", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Btn1"]);
	voltmx.automation.button.click(["Form1","Btn1"]);
});