startNodeId = 3;
fromIds_1 = [1, 7, 3, 4, 2, 6, 9];
toIds_1 =   [3, 3, 4, 6, 6, 9, 5];

fromIds_2 = [9, 6, 4, 2, 3, 7, 1];
toIdts_2 = [5, 9, 6, 6, 4, 3, 3];

const findNetworkEndpoint = (startNodeId, fromIds, toIds) => {
  //console.log("startNodeId", startNodeId);
  //console.log("fromIds", fromIds);
  //console.log("toIds", toIds);

  const fatherIdx = fromIds.findIndex(elem => elem === startNodeId);
  console.log("fatherIdx: ", fatherIdx);
  const childVal = toIds[fatherIdx];
  console.log("childVal: ", childVal);
    
  return findNetworkEndpoint(childVal, fromIds, toIds);
    
};




const res = findNetworkEndpoint(startNodeId, fromIds_1, toIds_1);
console.log(res);
