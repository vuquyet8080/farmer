export const getIconWithProductId = (plantId) => {
	return LIST_PLANT_1.find((item) => item.plantId === plantId).state[1].state;
};
export const LIST_PLANT_1 = [
	{
		plantId: 1,
		state: [
			{
				state: "brush/brush1.png",
			},
			{
				state: "brush/brush2.png",
			},
		],
		timeFinish: 8,
	},
	{
		plantId: 2,
		state: [
			{
				state: "mushroom/mushroom1.png",
			},
			{
				state: "mushroom/mushroom2.png",
			},
		],
		timeFinish: 6,
	},
	{
		plantId: 3,
		state: [
			{
				state: "sun_flower/sun_flower2.png",
			},
			{
				state: "sun_flower/sun_flower1.png",
			},
		],
		timeFinish: 5,
	},
	{
		plantId: 4,
		state: [
			{
				state: "trees_yellow/tree_yellow1.png",
			},
			{
				state: "trees_yellow/tree_yellow2.png",
			},
		],
		timeFinish: 4,
	},
	{
		plantId: 5,
		state: [
			{
				state: "violet/violet1.png",
			},
			{
				state: "violet/violet2.png",
			},
		],
		timeFinish: 12,
	},
	{
		plantId: 6,
		state: [
			{
				state: "wheat/wheat1.png",
			},
			{
				state: "wheat/wheat2.png",
			},
		],
		timeFinish: 10,
	},
	// {
	// 	plantId: 7,
	// 	state: [
	// 		{
	// 			state: "white_blue/white_blue1.png",
	// 		},
	// 		{
	// 			state: "white_blue/white_blue2.png",
	// 		},
	// 	],
	// 	timeFinish: 2,
	// },
];

export const PLANT_KEY = {
	brush1: "brush/brush1.png",
	brush2: "brush/brush2.png",
	mushroom1: "mushroom/mushroom1.png",
	mushroom2: "mushroom/mushroom2.png",
	sun_flower1: "sun_flower/sun_flower1.png",
	sun_flower2: "sun_flower/sun_flower2.png",
	tree_yellow1: "trees_yellow/tree_yellow1.png",
	tree_yellow2: "trees_yellow/tree_yellow2.png",
	violet1: "violet/violet1.png",
	violet2: "violet/violet2.png",
	wheat1: "wheat/wheat1.png",
	wheat2: "wheat/wheat2.png",
	white_blue1: "white_blue/white_blue1.png",
	white_blue2: "white_blue/white_blue2.png",
};
