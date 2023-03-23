import React, {useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

function LessonForm({ date }) {
	const levels = ["Basic", "One star", "Two star", "Three star", "Four star"];
	const [level, setCurrentLevel] = useState("Basic")

	const subjects = [
		{
			subject: "--",
			lessons: {
				"Basic": [
					"--"
				],
				"One_star": [
					"--"
				],
				"Two-star": [
					"--"
				],
				"Three_star": [
					"--"
				],
				"Four_star": [
					"--"
				],
				"Custom": [
					"--"
				]
			}
		},
		{
			subject: "Drill & Turnout",
			lessons: {
				"Basic": [
					"Care and Cleaning of Uniform",
					"Foot Drill - The Aims & Purpose of Drill",
					"Foot Drill - The Positions of Attention, Stand At Ease & Stand Easy",
					"Foot Drill - Left, Right & About Turn At The Halt",
					"Foot Drill - Compliments - Reason, Origin & Information",
					"Foot Drill - Saluting to the Front",
					"Foot Drill - Introduction to Marching",
					"Foot Drill - Marching & Halting in Quick Time",
					"Foot Drill - Revision",
					"Drill & Turnout - Foot Drill Test"
				],
				"One_star": [
					"Revise All Movements Taught at Basic Level",
					"Foot Drill - Forming Up Into Three Ranks & Getting On Parade",
					"Foot Drill - Open & Close Order",
					"Foot Drill - Dismissing & Falling Out",
					"Foot Drill - Wheeling in Quick Time",
					"Foot Drill - About Turn in Quick Time",
					"Foot Drill - Saluting on the March - Eyes Left & Right",
					"Drill & Turnout Test"
				],
				"Two_star": [
					"Revise All Movements Taught up to & Including One Star Level",
					"Foot Drill - Changing Step in Quick time",
					"Foot Drill - Marking Time in Quick time",
					"Foot Drill - Left & Right Turns on the March",
					"Foot Drill -  Parading & Inspecting a Squad - Moving Off & Falling Out",
					"Foot Drill - Revision",
					"Foot Drill - Test",
					"Rifle Drill - The Positions of Attention, Stand At Ease & Stand Easy",
					"Rifle Drill - Change Arms From the Shoulder",
					"Rifle Drill - Slope Arms from the Shoulder & Visa Versa",
					"Rifle Drill - Ground Arms from the Slope & Visa Versa",
					"Rifle Drill - Present Arms from the Slope & Visa Versa",
					"Rifle Drill - Saluting at the Halt",
					"Rifle Drill - Saluting of the March",
					"Rifle Drill - Revision",
					"Rifle Drill- Test"
				],
				"Three_star": [
					"Revise All Movements Taught up to & Including Two Star Level",
					"Words of Command & Directing Files",
					"Cane Drill",
					"Ceremonial Drill - Banner Guard",
					"Drilling a Squad - Practise",
					"Drill & Turnout Test"
				],
			}
		},
		{
			subject: "Military Knowledge",
			lessons: {
				"Basic": [
					"Ranks & Badges of Rank",
					"The History of the Army Cadet Force to Present Day",
					"Enrolment Ceremony",
					"Military Knowledge Test"
				],
				"One_star": [
					"The Army Cadet Force Organisation at County Level",
					"Military Knowledge Test"
				],
				"Two-star": [
					"The History and Tradition of the Regiment you which you are Affiliated",
					"Military Knowledge Test"
				],
				"Three_star": [
					"Methods of Instruction",
					"Drill & Turnout/Military Knowledge Teaching Practise",
					"Skill At Arms Teaching Practise",
					"Map & Compass Teaching Practise",
					"Fiedcraft Teaching Practise"
				],
				"Four_star": [
					"--"
				],
				"Custom": [
					"--"
				]
			}
		},
		{
			subject: "Skill at Arms",
			lessons: {
				"Basic": [
					"Lecture on Shooting in the Army Cadet Force, Competitions & Classifications",
					"Talk on Safety - Including Rules for Handling & Firing ACF Weapon Systems",
					"Penetration Demonstration of the Air Rifle/.22 Rifle",
					"The Air Rifle - Safety, Loading & Unloading",
					"The Air Rifle - Weapon Handling Test",
					".22 Rifle - Safety Precautions, Care, Cleaning & Ammunition Safe Guards",
					".22 Rifle - Sight Setting, Loading & Unloading",
					".22 Rifle - Weapon Handling Test"
				],
				"One_star": [
					"Cadet GP Rifle - General Description Safety & Sights",
					"Cadet GP Rifle - Stripping & Assembling",
					"Cadet GP Rifle - Basic Handling Skills",
					"Cadet GP Rifle - Cleaning & Maintenance",
					"Cadet GP Rifle -  Holding & Aiming in the Prone Position",
					"Cadet GP Rifle - Firing Drills",
					"Cadet GP Rifle - Firing from Other Positions and Use of Cover",
					"Cadet GP Rifle - Mechanism of the Weapon, Immediate Action & Stoppages",
					"Cadet GP Rifle - The Blank Firing System",
					"Cadet GP Rifle - Revision",
					"Cadet GP Rifle - Test"
				],
				"Two-star": [
					"Cadet GP Rifle - Aiming Off, Alterations of Sights & Miss Drills",
					"Cadet GP Rifle - Carriage of the Weapon & Reaction to Enemy Fire",
					"Cadet GP Rifle - Firing at Crossing and Multiple Targets",
					"Cadet GP Rifle - Boresighting the Rifle with Iron Sight",
					"Cadet GP Rifle - Zeroing the Rifle with Iron Sight",
					"Cadet GP Rifle - Revision",
					"Cadet GP Rifle - Test"
				],
				"Three_star": [
					"Light Support Weapon - General Description, Safety & Sights",
					"Light Support Weapon - Stripping, Assembling and Cleaning & Basic Handling",
					"Light Support Weapon - Holding, Aiming & Firing in the Prone Position",
					"Light Support Weapon - Alteration of Sights, Selection and the use of Firing Positions",
					"Light Support Weapon - Mechanism, Immediate Actions & Stoppages",
					"Light Support Weapon - Boresightings & Zeroing the LSW with SUSAT",
					"Light Support Weapon - Practise",
					"Light Support Weapon - Test",
					"Cadet GP Rifle - Test"
				],
				"Four_star": [
					"--"
				],
				"Custom": [

				]
			}
		},
		{
			subject: "Shooting",
			lessons: {
				"Basic": [
					"Introduction to Marksmanship Principles",
					"Grouping Practises",
					"Grouping Practises - Test"
				],
				"One_star": [
					"The Air Rifle or .22 Rifle Grouping Practise",
					"The Air Rifle or .22 Rifle Grouping Test"
				],
				"Two-star": [
					"The Cadet GP Rifle Grouping Practise",
					"The Cadet GP Rifle Grouping Test",
					"The Air Rifle or .22 Rifle Grouping Practise",
					"The Air Rifle or .22 Rifle Grouping Test"
				],
				"Three_star": [
					"--"
				],
				"Four_star": [
					"--"
				],
				"Custom": [
					"--"
				]
			}
		},
		// {
		// 	subject: ,
		// 	lessons: {
		// 		"Basic": [

		// 		],
		// 		"One_star": [

		// 		],
		// 		"Two-star": [

		// 		],
		// 		"Three_star": [

		// 		],
		// 		"Four_star": [

		// 		],
		// 		"Custom": [

		// 		]
		// 	}
		// },
		// {
		// 	subject: ,
		// 	lessons: {
		// 		"Basic": [

		// 		],
		// 		"One_star": [

		// 		],
		// 		"Two-star": [

		// 		],
		// 		"Three_star": [

		// 		],
		// 		"Four_star": [

		// 		],
		// 		"Custom": [

		// 		]
		// 	}
		// },
		// {
		// 	subject: ,
		// 	lessons: {
		// 		"Basic": [

		// 		],
		// 		"One_star": [

		// 		],
		// 		"Two-star": [

		// 		],
		// 		"Three_star": [

		// 		],
		// 		"Four_star": [

		// 		],
		// 		"Custom": [

		// 		]
		// 	}
		// },
		// {
		// 	subject: ,
		// 	lessons: {
		// 		"Basic": [

		// 		],
		// 		"One_star": [

		// 		],
		// 		"Two-star": [

		// 		],
		// 		"Three_star": [

		// 		],
		// 		"Four_star": [

		// 		],
		// 		"Custom": [

		// 		]
		// 	}
		// },
		// {
		// 	subject: ,
		// 	lessons: {
		// 		"Basic": [

		// 		],
		// 		"One_star": [

		// 		],
		// 		"Two-star": [

		// 		],
		// 		"Three_star": [

		// 		],
		// 		"Four_star": [

		// 		],
		// 		"Custom": [

		// 		]
		// 	}
		// },
		// {
		// 	subject: ,
		// 	lessons: {
		// 		"Basic": [

		// 		],
		// 		"One_star": [

		// 		],
		// 		"Two-star": [

		// 		],
		// 		"Three_star": [

		// 		],
		// 		"Four_star": [

		// 		],
		// 		"Custom": [

		// 		]
		// 	}
		// },








		// {
		// 	subject: "Military Knowledge",
		// 	lessons: [
		// 		"Ranks & Badges of Rank",
		// 		"The History of the Army Cadet Force to Present Day",
		// 		"Enrolment Ceremony",
		// 		"Military Knowledge Test"
		// 	]
		// },
		// {
		// 	subject: "Skill At Arms",
		// 	lessons: [
		// 		"Lecture on Shooting in the Army Cadet Force, Competitions & Classifications",
		// 		"Talk on Safety - Including Rules for Handling & Firing ACF Weapon Systems",
		// 		"Penetration Demonstration of the Air Rifle/.22 Rifle",
		// 		"The Air Rifle - Safety, Loading & Unloading",
		// 		"The Air Rifle - Weapon Handling Test",
		// 		".22 Rifle - Safety Precautions, Care, Cleaning & Ammunition Safe Guards",
		// 		".22 Rifle - Sight Setting, Loading & Unloading",
		// 		".22 Rifle - Weapon Handling Test"
		// 	]
		// },
		// {
		// 	subject: "Shooting",
		// 	lessons: [
		// 		"Introduction to Marksmanship Principles",
		// 		"Grouping Practises",
		// 		"Grouping Practises - Test"
		// 	]
		// },
		// {
		// 	subject: "Navigation",
		// 	lessons: [
		// 		"Introduction to Marksmanship Principles",
		// 		"Grouping Practises",
		// 		"Grouping Practises - Test"
		// 	]
		// },
		// {
		// 	subject: "Fieldcraft",
		// 	lessons: [
		// 		"Introduction to Cadet Fieldcraft",
		// 		"Preparation and Packing of Personal Equipment",
		// 		"Fieldcraft Test"
		// 	]
		// },
		// {
		// 	subject: "First Aid",
		// 	lessons: [
		// 		"Heartstart - Part 1",
		// 		"Heartstart - Part 2"
		// 	]
		// },
		// {
		// 	subject: "Expedition Training",
		// 	lessons: [
		// 		"Introduction & The Countryside Code",
		// 		"Expedition Training Tests"
		// 	]
		// },
		// {
		// 	subject: "Physical Achievement",
		// 	lessons: [
		// 		"Basic Physical Achievement Training",
		// 		"Basic Physical Achievement Test"
		// 	]
		// }

		// "Event",
		// "Weapon Handling Test",
		// "Non Syllabus Event",
		// "Detachment Closed",
		// "One Star Map & Compass",
		// "Three Star Junior Cadet Instructors Cadre",
		// "Four Star Progressive Subject",
	]

	const [currentParentSubject, setCurrentParentSubject] = useState(subjects[0].subject)


	return (
		<Form className="p-5">
			<Form.Group className="mb-3" onChange={(e) => setCurrentLevel(e.target.value)}>
				<Form.Select>
					{levels?.map((item) => {
						return <option value={item}>{item}</option>;
					})}
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3 mt-3" onChange={(e) => setCurrentParentSubject(e.target.value)}>
				<Form.Label>Subject:</Form.Label>
				<Form.Select >
				{
					subjects.map(subject => {
						return <option>{subject.subject}</option>
					})
				}
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Lesson:</Form.Label>
				<Form.Select>			{
					subjects?.filter(subject => subject.subject === currentParentSubject)[0]?.lessons[level.split(" ").join("_")]?.map(lesson => {
						return <option>{lesson}</option>
					})
				}</Form.Select>	
			</Form.Group>
		</Form>
	);
}

export default LessonForm;
