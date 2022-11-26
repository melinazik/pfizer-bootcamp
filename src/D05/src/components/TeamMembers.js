import { List, Typography, Divider, Avatar } from "antd";
import team from "../data/teamMembers";

const { Title } = Typography;

const TeamMembers = () => (
  <>
    <Title>Team 04</Title>
    <Divider />
    <List
      size="large"
      bordered
      dataSource={team}
      renderItem={({ name, image, description }) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={65} src={image} />}
            title={name}
            description={description}
          />
        </List.Item>
      )}
    />
  </>
);

export default TeamMembers;
