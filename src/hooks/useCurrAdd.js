import React, { useState } from 'react'
import { db } from '../firebase/config'

const useCurrAdd = (collection, condition, condition2) => {
  const [documents, setDocuments] = useState([])

  React.useEffect(() => {
    let collectionRef = db.collection(collection)
    if (condition) {
      if (
        !condition.compareValue ||
        !condition.compareValue.length ||
        !condition2.compareValue ||
        !condition2.compareValue.length
      ) {
        // reset documents data
        setDocuments([])
        return
      }

      collectionRef = collectionRef
        .where(condition.fieldName, condition.operator, condition.compareValue)
        .where(condition2.fieldName, condition2.operator, condition2.compareValue)
    }

    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      const documents = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))

      setDocuments(documents)
    })

    return unsubscribe
  }, [collection, condition, condition2])

  return documents
}

export default useCurrAdd
