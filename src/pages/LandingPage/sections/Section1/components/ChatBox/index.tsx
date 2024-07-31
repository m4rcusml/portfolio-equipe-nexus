import './styles.css';

type Props = {
  content?: string;
  alignSelf?: 'flex-start' | 'flex-end';
}

export function ChatBox({ content, alignSelf = 'flex-start' }: Props) {
  return (
    <div className='chatbox' style={{
      alignSelf,
      borderBottomLeftRadius: alignSelf === 'flex-start' ? '0' : undefined,
      borderBottomRightRadius: alignSelf === 'flex-end' ? '0' : undefined
    }}>
      <p>{content}</p>
    </div>
  )
}