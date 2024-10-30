const sheeps1 = [true, true, true, false, true, true, true, true ,true, 
				false, true, false, true, false, false, true , true, true, 
				true, true, false, false, true, true];

const sheeps2 = [false, false, false];

const sheeps3 = "hello world";

function	countSheeps(list)
{
	let	count = 0;

	if (typeof(list) != "object")
	{
		console.error("Error: not an object:", list);
		return ;
	}
	for (let i = 0; i < list.length; i++)
	{
		if (typeof(list[i]) != "boolean")
		{
			console.error("Error: value in index", i, "is not a boolean:", list[i]);
			return ;
		}
		if (list[i] === true)
			count++;
	}
	if (count === 0)
	{
		console.log("UPS!!! Wolfs eaten Sheeps");
		return ;
	}
	console.log("There are", count, "sheep in total");
}

countSheeps(sheeps1);
countSheeps(sheeps2);
countSheeps(sheeps3);
