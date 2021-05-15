async function getCharData(characterN) {
	const path = `https://api.genshin.dev/characters/${characterN}`;
	try {
		const res = await fetch(path);
		const json = await res.json();
		return json;
	} catch (err) {
		return err;
	}
}

export { getCharData };
