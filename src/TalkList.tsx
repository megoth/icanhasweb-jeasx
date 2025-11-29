import {type Talk} from "./scripts/buildTalks";

interface Props {
    talks: Array<Talk>
}

export default function TalkList({talks}: Props) {
    return (
        <ul>
            {talks.map((talk) => (
                <li>
                    <a href={talk.path}>{talk.title}</a>
                </li>
            ))}
        </ul>
    )
}