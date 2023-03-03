export default function Title({ id, size = 1, text = '' }) {
  return (
    <div 
        id={id ? id : ''}
    >
        { size == 1 && (
            <h1>
                { text }
            </h1>
        )}
        { size == 2 && (
            <h2>
                { text }
            </h2>
        )}
        { size == 3 && (
            <h4>
                { text }
            </h4>
        )}
        { size == 4 && (
            <h5>
                { text }
            </h5>
        )}        
    </div>
  )
}
