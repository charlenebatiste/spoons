import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="Home">
			<h1>Welcome to Spoons</h1>
			<Link to="/game">Play Spoons</Link>
			<div>
				<h2>What is this App?</h2>
				<p>
					Lorem ipsum dolor, sit amet
					consectetur adipisicing elit.
					Dolorum minima libero id
					tempore, laboriosam iure
					aliquid iste, at nobis impedit
					est dolor eius. Quia mollitia
					laborum, aliquam ea quisquam
					repellendus!
				</p>
			</div>
			<div>
				<h2>Technologies Used</h2>
				<p>
					Lorem ipsum dolor sit amet
					consectetur adipisicing elit.
					Impedit iste esse, quis rerum
					qui fuga totam obcaecati. Qui
					provident praesentium,
					delectus deserunt quam ipsa id
					sint, vel ex voluptatem
					necessitatibus.
				</p>
			</div>
			<div>
				<h2>Team</h2>
				<p>
					This app was designed and
					developed by me; Charlene
					Batiste. I am a Junior
					Software Engineer with a
					passion Front-end Web
					Development based in Austin,
					Texas. My journey to tech has
					been long and roundabout one.
					I spent my early twenties
					pursuing a University degree
					in English and Foreign
					Languages before traveling the
					world teaching English and
					immersiving myself in
					different cultures. The later
					half of my twenties found me
					working as a 911
					communications officer where I
					thrived ina team-centric
					environment and developed
					self-worth through helping
					others. It was through my dad,
					who had spent his life in
					tech, that I found my way
					taking a front-end development
					course online at General
					Assembly and the rest is
					history. When I'm not coding,
					you can find me playing DnD
					with my friends, hosting game
					night at my house or taking
					impromptu hiking adventures
					with my dog, Balou.
				</p>
			</div>
		</div>
	);
}

export default Home;
