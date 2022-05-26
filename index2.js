startNodeId = 3;
fromIds_1 = [7, 3, 4, 6, 9];
toIds_1 = [3, 4, 6, 9, 5];

fromIds_2 = [9, 6, 4, 2, 3, 7, 1];
toIds_2 = [5, 9, 6, 6, 4, 3, 3];

fromIds_3 = [7, 3, 4, 6, 9, 5];
toIds_3 = [3, 4, 6, 9, 5, 7];

const findNetworkEndpoint = (startNodeIds, fromIds, toIds) => {
  //console.log("startNodeId", startNodeId);
  //console.log("fromIds", fromIds);
  //console.log("toIds", toIds);

  const fatherIdx = fromIds.findIndex(elem => elem === startNodeIds);
  console.log("fatherIdx: ", fatherIdx);
  const childVal = toIds[fatherIdx];
  console.log("childVal: ", childVal);
  if (!fromIds.includes(childVal)) return childVal;
  if (childVal === startNodeId) return fromIds[fatherIdx];
  return findNetworkEndpoint(childVal, fromIds, toIds);
};

const res = findNetworkEndpoint(startNodeId, fromIds_3, toIds_3);
console.log(res);
