async function getColorApi() {
  const url = "http://colormind.io/api/";
  const data = {
    model: "default",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching color palette: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return result.result;
  } catch (error) {
    console.error("Error in getColorApi:", error);
    throw error;
  }
}
