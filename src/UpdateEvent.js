function UpdateEvent (){





    return (


        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Event</Modal.Title>
        </Modal.Header>
        <Modal.Body><div style={{display: "flex", flexDirection: "column"}}>
            <input type="text" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setNom_event(e.target.value)} placeholder="Description"></input>
            <input type="file" name="file" className="form-control" placeholder="file"onChange={(e) => setFile(e.target.files[0])}></input>
          <br></br>
            from :
            <input type="date" style={{
             height: 40,
             borderRadius: 10,
             border: "1px solid lightgray",
             padding: 10,
             marginTop:10,
             marginBottom: 20,
            }} placeholder="date" onChange={(e) => setDat(e.target.value)}></input>
            to:
            <input type="date" style={{
             height: 40,
             borderRadius: 10,
             border: "1px solid lightgray",
             padding: 10,
             marginBottom: 20,
            }} placeholder="date" onChange={(e) => setDatf(e.target.value)}></input>
              <input type="text" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
              marginTop:20
            }} placeholder="TypeEvent" onChange={(e) => setType(e.target.value)}></input>
          </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {UpdateEvent(eventid); handleClose();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    );

}


export  default  UpdateEvent;