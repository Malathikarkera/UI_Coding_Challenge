
"use strict";
//Function to get the type of button and perform either shuffle or sort action
const shuffleBtn=(type)=>{
    const getShuffleNode= document.getElementById('shuffleAndSort')
    let nodes= getShuffleNode.children,len=0;
    nodes = Array.prototype.slice.call(nodes);
    type=="shuffle" ? nodes = shuffleNodes(nodes) : nodes = sortNodes(nodes)
    while(len < nodes.length)
    {
        getShuffleNode.appendChild(nodes[len]);
        ++len;
    }
    document.getElementById('shuffleAndSort').nodes
} 

//Function to shuffle the numbers
const shuffleNodes = (nodes) =>{
    let items = nodes.slice(0), temp, len = items.length, rand;
    while(--len)
    {
        rand = Math.floor(len * Math.random());
        temp = items[rand];
        items[rand] = items[len];
        items[len] = temp;
    }
    return items;
}

//Function to sort the numbers in ascending order
const sortNodes = (nodes) =>{
    let items = nodes.slice(0),temp=[];
    console.log(items)
    temp=  items.sort((a, b)=>{ return a.innerHTML-b.innerHTML})
    return temp
}
