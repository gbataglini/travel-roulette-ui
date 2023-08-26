export function destinationActions() {
  return {
    async createDestination(destinationName) {
      try {
        let response = await fetch(
          "http://localhost:5001/api/v1/destinations",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              destinationName: destinationName,
            }),
          }
        );
        return response.status === 200;
      } catch (err) {
        return false;
      }
    },

    async fetchDestinationData(status) {
      const response = await fetch(
        `http://localhost:5001/api/v1/destinations?status=${encodeURIComponent(
          status
        )}`
      );
      const destinations = response.json();
      return destinations;
    },

    async handleRandomDest() {
      const response = await fetch(
        `http://localhost:5001/api/v1/destinations/random`
      );
      const randomDestination = response.json();
      return randomDestination;
    },

    async handleDelete(id) {
      try {
        const response = await fetch(
          `http://localhost:5001/api/v1/destinations/${id}`,
          {
            method: "DELETE",
          }
        );
        return response.status === 204;
      } catch (err) {
        return false;
      }
    },

    async handleUpdateStatus(id, status) {
      try {
        const response = await fetch(
          `http://localhost:5001/api/v1/destinations/${id}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PATCH",

            body: JSON.stringify({
              status: status,
            }),
          }
        );
        return response.status === 200;
      } catch (err) {
        return false;
      }
    },
  };
}
