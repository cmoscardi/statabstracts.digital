#import s3cmd
import os
import glob
import re
import subprocess

"""
Prerequisites:
- you have a python env with s3cmd installed
- you have run the digitization pipeline ipynb
- you have set up s3cmd following these instructions: https://docs.digitalocean.com/products/spaces/reference/s3cmd/
"""

#s3 bucket name (on digitalocean)
BUCKET_NAME = "sad"
SPACE_NAME = f"s3://{BUCKET_NAME}"
# where the abstracts live (based on how you configured digitization pipeline ipynb)
BASE_DIRECTORY = "/home/christian/ocr/ocr-omnibus/stat-abstracts"

def main():
    files_to_copy = sorted(glob.glob(f"{BASE_DIRECTORY}/*/*.pdf-processed/docTR-PDF.pdf"))
    fname_regex = r'1[0-9][0-9][0-9](?:[-_][0-9][0-9])?.pdf'
    for fname in files_to_copy:
        res = re.findall(fname_regex, fname)
        if len(res) != 1:
            print(fname)
            raise Exception(f"something bad happened in {year}??")
        res = res[0]
        # standardize
        res = res.replace("_","-")

        cmd = ["s3cmd", "put", fname, f"{SPACE_NAME}/{res}"]
        print(f"running cmd {cmd}")
        status = subprocess.call(cmd)
        if status !=0:
            raise Exception(f"something bad happened in {res}??")



    print("=" * 10)
    print("making files public...")
    cmd = "s3cmd setacl s3://sad/ --acl-public --recursive".split()
    subprocess.call(cmd)
    print("=" * 10)
    print("done.")






if __name__ == "__main__":
    main()
