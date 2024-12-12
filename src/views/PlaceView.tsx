import { useParams } from "react-router";

export default function PlaceView() {
	let params = useParams();
	// params.teamId
	return <p>Place: {params.place}</p>
}