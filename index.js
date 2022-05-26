const startNodeId = 7;
const fromIds_1 = [1, 7, 3, 4, 2, 6, 9];
const toIds_1 = [3, 3, 4, 6, 6, 9, 5];

//cas 1 RESEAU SIMPLE
// const childr = [9, 6, 4, 2, 3, 7, 1];
// const parent = [5, 9, 6, 6, 4, 3, 3];

//cas 2 lineair
// const childr = [7, 3, 4, 6, 9];
// const parent = [3, 4, 6, 9, 5];

//cas 3 boucle
//const childr = [7, 3, 4, 6, 9, 5];
//const parent = [3, 4, 6, 9, 5, 7];

//cas 4 cas isolé
const childr = [7];
const parent = [];

const findNetworkEndpointRec = (startNodeId, fromIds, toIds, firstVal) => {
  //console.log("startNodeId", startNodeId);
  //console.log("fromIds", fromIds);
  //console.log("toIds", toIds);

  console.log("Val: ", startNodeId);
  const fatherIdx = fromIds.findIndex(elem => elem === startNodeId);
  //console.log("Idx: ", fatherIdx);

  if (fatherIdx >= 0) {
    const childVal = toIds[fatherIdx];
    if (childVal === firstVal) {
      return fromIds[fatherIdx];
    }
    return findNetworkEndpointRec(childVal, fromIds, toIds, firstVal);
    
  } else {
    return startNodeId;
  }
};

const findNetworkEndpoint = (startNodeId, fromIds, toIds) => {
  if (fromIds.length === 1 && toIds.length !== fromIds.length) {
    return startNodeId;
  } else {
    return findNetworkEndpointRec(startNodeId, fromIds, toIds, startNodeId);
  }
};

const res = findNetworkEndpoint(startNodeId, childr, parent);
console.log("res: ", res);
