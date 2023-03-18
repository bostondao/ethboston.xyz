import React from "react";
import TitleInfo from "../components/TitleInfo";

export default function legal() {
	return (
		<div>
			<TitleInfo />
			<h2 className="text-4xl text-center">Legal</h2>
			<div className="flex justify-center mt-10">
				<div className="flex flex-col">
					<a
						className="underline m-4 text-center"
						href="https://drive.google.com/file/d/11T-p8Ken_jYmKc_Cs5MJK-okO-e1swyI/view?usp=share_link"
						target="_blank"
						referrerPolicy="norefer"
						rel="noreferrer">
						Terms of Service
					</a>
					<a
						className="underline m-4 text-center"
						href="https://drive.google.com/file/d/1x5sSjG_0GUy5YHn3Hote9R4jyIULdGSy/view?usp=share_link"
						target="_blank"
						referrerPolicy="norefer"
						rel="noreferrer">
						Privacy Policy
					</a>
					<a
						className="underline m-4 text-center"
						href="https://drive.google.com/file/d/1tS1vZBb_8zUpzOFrjPMx06IQDl-alyCK/view?usp=share_link"
						target="_blank"
						referrerPolicy="norefer"
						rel="noreferrer">
						Rules, Release and Waiver
					</a>
					<a
						className="underline m-4 text-center"
						href="https://drive.google.com/file/d/1g28XV93Txfu2jAm-MZbHcq42VxvJxDSj/view?usp=share_link"
						target="_blank"
						referrerPolicy="norefer"
						rel="noreferrer">
						Contributor Proposal Agreement
					</a>
				</div>
			</div>
		</div>
	);
}
