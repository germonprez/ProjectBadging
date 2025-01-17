import "./about-dei-mobile.scss";
import "../../assets/styles/global.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	goldBadge,
	silverBadge,
	bronzeBadge,
	platinumBadge,
} from "../../assets/images";

const AboutDeiMobile = () => {
	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography component={"div"}>
						What is DEI <br /> Project Badging?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography component={"div"}>
						<p>
							The primary objective of the All In CHAOSS DEI Badging Initiative
							is to enable open-source maintainers to signal their ongoing
							efforts in improving and prioritizing DEI within their
							communities.
						</p>
						<ul>
							<li>
								To assess and address DEI standards in open-source projects.
							</li>
							<li>Recognize projects and communities for their DEI efforts</li>
							<li>
								Enable organizations to make informed decisions and take
								targeted actions to create a more inclusive and equitable
								environment.
							</li>
						</ul>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Application Process</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography component={"div"}>
						<p>
							The All In CHAOSS DEI Badging Initiative follows a straightforward
							process:
						</p>
						<div>
							<h3>Self-Assessment and Documentation:</h3>
							<p>
								Before applying for a DEI badge, maintainers are encouraged to
								conduct a self-assessment of their project&#39;s DEI efforts
								based on the <strong>CHAOSS DEI metrics</strong> on Project
								Access, Newcomer Experience, etc. After the reflective process,
								maintainers can document how the project attends to and
								prioritizes DEI around these areas in a markdown file called the
								DEI.md file. This DEI.md file should exist within the
								project&#39;s repository for easy feedback from the community.
							</p>
						</div>
						<div>
							<h3>Project Application:</h3>
							<p>
								Once the DEI.md file is published and publicly available,
								project maintainers interested in the All in CHAOSS DEI badge
								can proceed to apply here. The applicant must be a maintainer of
								the project, and the repository that holds the DEI.md file must
								be specified.
							</p>
						</div>
						<div>
							<h3>Badging Evaluation:</h3>
							<p>
								The review follows an automated process in which a bot scans the
								project repository for the presence of a DEI.md file. The bot
								will review the DEI.md file for relevant information provided by
								the maintainer and its alignment with the CHAOSS DEI metrics to
								determine eligibility for the DEI badge.
							</p>
						</div>
						<div>
							<h3>Recognition and Badging:</h3>
							<p>
								Projects that meet the established criteria will be awarded the
								All In CHAOSS DEI badge, which they can prominently display on
								their project&#39;s website, documentation, or other relevant
								platforms. The badge signifies the project&#39;s commitment to
								DEI and highlights its adherence to best practices.
							</p>
						</div>
						<div>
							<h3>Continued Engagement:</h3>
							<p>
								Once the badging process is completed, we provide inclusive,
								comprehensive reports and insight for maintainers to enable them
								to reflect on their DEI efforts. This report will also enable
								maintainers to identify areas of improvement and do better
								before applying for other badges. Maintainers who receive the
								DEI badge are encouraged to continue their DEI, share
								experiences, and learn from others in the community.
							</p>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3a-content"
					id="panel3a-header"
				>
					<Typography>DEI.md File</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography component={"div"}>
						<p>
							The DEI.md file is an essential component of the All In CHAOSS DEI
							badging initiative. It serves as a benchmark for open-source
							projects to openly acknowledge and showcase their dedication to
							diversity, equity, and inclusion (DEI).
						</p>

						<p>
							The DEI.md file can be used by maintainers to explicitly express
							and self-reflect on their project&#39;s approach to DEI. It also
							highlights crucial points within our projects and communities that
							should be prioritized.
						</p>

						<p>
							Maintainers are encouraged to include relevant content that
							reflects their project&#39;s specific approaches and initiatives
							regarding diversity, equity, and inclusion within DEI.md file.
							This may include outlining strategies, policies, and practices to
							foster a welcoming environment for all contributors.
						</p>
						<ul>
							<li>
								If using GitHub, place the DEI.md file in your organizational
								.github repository, similar to your CODE_OF_CONDUCT.md file.
							</li>
							<li>
								If using GitHub and a .github folder is unavailable or used,
								place the DEI.md file in a community repository.
							</li>
							<li>
								If you have a project website, provide a link to your DEI.md
								file from the main project navigation.
							</li>
							<li>
								Use the following <strong>DEI.md template</strong> to develop
								your project DEI.md file.
							</li>
						</ul>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4a-content"
					id="panel4a-header"
				>
					<Typography>DEI Badge</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography component={"div"}>
						<div className="badges">
							<img src={bronzeBadge} alt="Bronze badge" />
							<img src={silverBadge} alt="Silver badge" />
							<img src={goldBadge} alt="Gold badge" />
							<img src={platinumBadge} alt="Platinum badge" />
						</div>

						<div>
							<p>
								The All In CHAOSS DEI badging initiative offers four badge
								levels: bronze, silver, gold, and platinum. The badging process
								follows an incremental approach that requires the presence of
								one badge to apply for the next and an understanding of the
								criteria associated with each badge level. This enables
								applicants to showcase their commitment, dedication, and
								consistent efforts in meeting the evolving DEI standards for
								each badge. To attain all these badges, the applicant must
								follow a progressive application process starting with the
								Bronze badge.
							</p>
							<div>
								<h3>### Bronze Badge</h3>
								<p>
									The bronze badge is the first-level badge and is usually
									assigned to every project that applies for the first time. It
									primarily focuses on how the project metrics provided in the
									DEI.md file meet the basic requirements according to the{" "}
									<strong>CHAOSS metrics.</strong>
								</p>
								<h4>Criteria:</h4>
								<ul>
									<li>Having a DEI.md file</li>
									<li>
										Presence of required metrics headers in the DEI.md file
									</li>
									<li>
										Presence of headings on Project Access, Inclusive
										Leadership, Communication Transparency, and Newcomer
										Experience metrics.
									</li>
								</ul>
							</div>
							<div>
								<h3>### Silver Badge</h3>
								<p>
									Building upon the foundation established with the Bronze
									badge, applicants are required to fulfil additional criteria
									and demonstrate an expanded level of commitment to DEI. The
									silver badge centers on the ethical use of computing
									automation based on CHAOSS metrics models. It focuses more on
									the collaborative and inclusive needs of the project according
									to CHAOSS metrics. One can only apply for a Silver badge after
									earning the Bronze badge and receiving the DEI scan report.
								</p>
								<h4>Criteria:</h4>
								<ul>
									<li>Presence of the DEI.md file</li>
									<li>
										Extensive response to the Bronze badge report implementation
									</li>
									<li>
										Presence of headings on Inclusivity reports and Contributor
										participation metrics.
									</li>
								</ul>
							</div>
							<div>
								<h3>### Gold Badge</h3>
								<p>
									As applicants advance to the Gold badge level, they are
									expected to fully understand and implement DEI best practices
									in their community.
								</p>
								<h4>Criteria:</h4>
								<ul>
									<li>Presence of the DEI.md file</li>
									<li>
										Extensive response to the Bronze and Silver badge report
										implementations
									</li>
								</ul>
							</div>
							<div>
								<h3>### Platinum Badge</h3>
								<p>
									The highest level in the badging process, the Platinum badge
									represents exceptional mastery, leadership, and sustained
									excellence in the relevant area.
								</p>
								<h4>Criteria:</h4>
								<ul>
									<li>Presence of the DEI.md file</li>
									<li>
										Extensive response to the Bronze, Silver, and Gold badge
										report implementations
									</li>
								</ul>
							</div>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default AboutDeiMobile;
