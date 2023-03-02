export default function Title({ size = 1, text = '' }) {
  return (
    <>
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
    </>
  )
}
