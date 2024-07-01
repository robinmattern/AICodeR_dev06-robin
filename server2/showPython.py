import os
import sys
import platform
import subprocess
import inspect

def display_environment_info( aModuleName="" ):
  """Displays information about the virtual environment and execution context."""

  # Environment variables

  # Executable locations (using which command)
  try:
    python_path = subprocess.check_output(["which", "python"]).decode().strip()
  except subprocess.CalledProcessError:
    python_path = "Not found"

  try:
    pip_path = subprocess.check_output(["which", "pip"]).decode().strip()
  except subprocess.CalledProcessError:
    pip_path = "Not found"

  # Deactivate command location (assuming virtualenv)
  deactivate = os.path.join( os.environ.get('VIRTUAL_ENV', ''), 'Scripts', 'deactivate.bat') if os.name == 'nt' else os.path.join(os.environ.get('VIRTUAL_ENV', ''), 'bin', 'deactivate')

  # Python and Pip versions
  try:
    pip_version = subprocess.check_output( ["pip", "--version"]).decode().strip().split()[1]
  except subprocess.CalledProcessError:
    pip_version = "Not found"

  # Python locations in PATH
  python_locations = [p for p in os.environ['PATH'].split(os.pathsep) if 'python' in p.lower()]

  try:
    parent_script =  inspect.stack()[1].filename  # Get the frame of the caller (second element)
#   os.path.basename(frame.filename)
  except:
    parent_script =  __file__

  repo_folder   =  __file__.split("\\server")[0]

  # Python locations in PATH
  if aModuleName: 
    try:
#     import whisper
      module = __import__(aModuleName)
      module_version = module.__version__
    except ImportError as e:
    # Check for the specific error message related to ctypes.CDLL
      if "libc_name" in str(e):
        module_version = f"failed: CDLL error during import"
      else:
        module_version = f"import error: {e}"
    except Exception as e:
      # Catch other potential exceptions
      module_version = f"Unexpected error importing {aModuleName}: {e}"


  # Other virtual environment variables (check virtualenv documentation for specifics)
  # You can add checks for other environment variables potentially set by your virtual environment manager (e.g., virtualenvwrapper)

  print("PYTHONPATH:         ", os.environ.get('PYTHONPATH', None))
  print("VIRTUAL_ENV:        ", os.environ.get('VIRTUAL_ENV', None))
  print("Pip executable:     ", pip_path)
  print("Python executable:  ", python_path)
  print("Deactivate command: ", deactivate)
  print("Parent script:      ", parent_script)
  print("Current directory:  ", os.getcwd())
  print("Repo directory:     ", repo_folder)
  print("PATH locations:     ", "\n                     ".join( python_locations ) )
  if aModuleName:
    print( f"{aModuleName} version:".ljust( 19, " " ) + " ", module_version )
  print("Python version:     ", platform.python_version() )
  print("Pip version:        ", pip_version )


# Run the display function
# display_environment_info()

if __name__ == "__main__":
  if len(sys.argv[1:]) > 0:  # If there are command line arguments, excluding first script name
    display_environment_info( sys.argv[1] ) 
  else:    
    display_environment_info()

# PYTHONPATH: None
# VIRTUAL_ENV				  : E:/Repos/Robin/AIObjs_/dev02-robin/server2/python_modules
# Python executable			  : /e/Repos/Robin/AIObjs_/dev02-robin/server2/python_modules/Scripts/python
# Pip executable			  : /e/Repos/Robin/AIObjs_/dev02-robin/server2/python_modules/Scripts/pip
# Deactivate command		  : E:/Repos/Robin/AIObjs_/dev02-robin/server2/python_modules\Scripts\deactivate.bat
# Current directory			  : E:\Repos\Robin\AIObjs_\dev02-robin\server2\s22_transcribe-video-app
# Python locations in PATH	  : ['E:\\Repos\\Robin\\AIObjs_\\dev02-robin\\server2\\python_modules\\Scripts', 'C:\\Python39\\Scripts', 'C:\\Python39']
# Python version			  : 3.12.3
# Pip version				  : 24.0

