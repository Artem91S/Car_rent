import request, { gql } from "graphql-request";

export const getCarList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        createdAt
        gas
        id
        price
        publishedAt
        seat
        title
        updatedAt
        wheel
        type
        img {
          url
        }
      }
    }
  `;
  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clp411c243w3a01unfehvh8iw/master",
    query
  );
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query MyQuery {
      locations {
        location
        id
      }
    }
  `;
  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clp411c243w3a01unfehvh8iw/master",
    query
  );
  return result;
};

export const createBocking = async (formValue: any) => {
  const mutation =
    gql`
    mutation MyMutation {
      createBocking(
        data: {
          location: "` +
    formValue.location +
    `"
          dropOffTime: "` +
    formValue.dropOffTime +
    `"
          dropOffDate: "` +
    formValue.dropOffDate +
    `"
          contactNumber: "` +
    formValue.contactNumber +
    `"
          pickUpDate: "` +
    formValue.pickUpDate +
    `"
          pickUpTime: "` +
    formValue.pickUpTime +
    `"
          carId: "` +
    formValue.carId +
    `"
          carName: "` +
    formValue.carName +
    `"
    userName: "` +
    formValue.userName +
    `"
        }
      ) {
        id
      }
    }
  `;
  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clp411c243w3a01unfehvh8iw/master",
    mutation
  );
  return result;
};

export const getBookings = async () => {
  const query = gql`
    query GetBookings {
      bockings {
        dropOffDate
        pickUpDate
        location
        contactNumber
        carId
        carName
        dropOffTime
        pickUpTime
        userName
      }
    }
  `;
  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clp411c243w3a01unfehvh8iw/master",
    query
  );
  return result;
};
