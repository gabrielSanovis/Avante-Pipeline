import { Button } from '../../../../components/Button';
import {
    CourseContainer,
    CourseHeader,
    CourseTitle,
    CourseDescription,
    CourseMain,
    CourseList,
} from './styles';

interface ICourseProps {
    id?: number;
    title: string;
    description?: string;
    courseList?: ICourseList[];
}

interface ICourseList {
    id: number;
    name: string;
    link: string;
}

export const Course: React.FC<ICourseProps> = ({ title, description, courseList }) => {
    return (
        <CourseContainer id={title}>
            <CourseHeader>
                <CourseTitle>
                    {title}
                </CourseTitle>
                <CourseDescription>
                    {description}
                </CourseDescription>
            </CourseHeader>

            <CourseMain>
                <CourseTitle green>
                    {title}
                </CourseTitle>
                <CourseList>
                    {
                        courseList?.map(item => (
                            <li key={item.id}>
                                <a href={item.link} target="_blank">
                                    <Button larger='lg'>{item.name}</Button>
                                </a>
                            </li>
                        ))
                    }
                </CourseList>
            </CourseMain>
        </CourseContainer>
    );
}