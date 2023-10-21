use pyo3::prelude::*;

fn main() -> PyResult<()> {


    pyo3::prepare_freethreaded_python();
    Python::with_gil(|py| {
        let fun: Py<PyAny> = PyModule::from_code(
            py,
"
def recur_fibo(n):
   if n <= 1:
       return n
   else:
       return(recur_fibo(n-1) + recur_fibo(n-2))

def main():
    return recur_fibo(40)",
            "",
            "",
        )?
        .getattr("main")?
        .into();

        // call object with PyDict
        let t = fun.call0(py)?;
        print!("{}",t);


        Ok(())
    })
}
